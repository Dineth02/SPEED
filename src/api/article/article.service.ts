import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(createDto: CreateArticleDto): Promise<Article> {
    const article = new this.articleModel(createDto);
    return article.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    if (!article) throw new NotFoundException('Article not found');
    return article;
  }

  async update(id: string, updateDto: UpdateArticleDto): Promise<Article> {
    const updated = await this.articleModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    }).exec();
    if (!updated) throw new NotFoundException('Article not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.articleModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Article not found');
  }
}
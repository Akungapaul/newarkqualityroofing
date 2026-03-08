import { z } from 'zod';
import { ArticleContentSchema, type ArticleContent } from './schema';
import { repairMaintenanceArticles } from './repair-maintenance';
import { residentialRoofTypesArticles } from './residential-roof-types';
import { commercialRoofTypesArticles } from './commercial-roof-types';
import { componentsSpecialtyArticles } from './components-specialty';
import { replacementSubPagesArticles } from './replacement-sub-pages';
import { energySolarArticles } from './energy-solar';
import { commercialServicesArticles } from './commercial-services';
import { designConsultationArticles } from './design-consultation';
import { comparisonArticles } from './comparisons';
import { homepageArticles } from './homepage';

// ─── Content aggregator ─────────────────────────────────────────────────────
// All 252 article content objects from 10 content files.
// Validates all content at module level -- build crashes on invalid data.

const allContent: ArticleContent[] = z.array(ArticleContentSchema).parse([
  ...repairMaintenanceArticles,
  ...residentialRoofTypesArticles,
  ...commercialRoofTypesArticles,
  ...componentsSpecialtyArticles,
  ...replacementSubPagesArticles,
  ...energySolarArticles,
  ...commercialServicesArticles,
  ...designConsultationArticles,
  ...comparisonArticles,
  ...homepageArticles,
]);

// ─── Map-based O(1) lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, ArticleContent>(
  allContent.map((c) => [c.articleId, c])
);

// ─── Public API ─────────────────────────────────────────────────────────────

export function getArticleContent(articleId: string): ArticleContent {
  const content = contentMap.get(articleId);
  if (!content) {
    throw new Error(`Missing article content for articleId="${articleId}"`);
  }
  return content;
}

export function getAllArticleContent(): ArticleContent[] {
  return allContent;
}

/**
 * Created by pablo on 5/9/16.
 */

'use strict';

import AbstractFilter from './AbstractFilter';
import Operator from './Operator';

export default class FilterReviews extends AbstractFilter {

  constructor(){
    super('');
    this.next = function () {
      return new Operator(this.filter);
    };
  }

  id(value) {
    this.filter = 'id';
    return this.setvalue(value);
  }

  additionalField(field) {
    if(!field) {
      throw new Error('The parameter \'field\' for additionalField is required');
    }
    this.filter = `AdditionalField_${field}`;
    return this.setvalue(value);
  }

  authorId(value) {
    this.filter = 'AuthorId';
    return this.setvalue(value);
  }

  averageOverallRating(value) {
    this.filter = 'AverageOverallRating';
    return this.setvalue(value);
  }

  campaignId(value) {
    this.filter = 'CampaignId';
    return this.setvalue(value);
  }

  categoryAncestorId(value) {
    this.filter = 'CategoryAncestorId';
    return this.setvalue(value);
  }

  categoryId(value) {
    this.filter = 'CategoryId';
    return this.setvalue(value);
  }

  contentLocale(value) {
    this.filter = 'ContentLocale';
    return this.setvalue(value);
  }

  contextDataValue_(dimension_external_id) {
    if(!field) {
      throw new Error('The parameter \'dimension_external_id\' for contextDataValue filter is required');
    }
    this.filter = `ContextDataValue_${dimension_external_id}`;
    return this.setvalue(value);
  }

  hasComments(value) {
    this.filter = 'HasComments';
    return this.setvalue(value);
  }

  hasPhotos(value) {
    this.filter = 'HasPhotos';
    return this.setvalue(value);
  }

  hasTags(value) {
    this.filter = 'HasTags';
    return this.setvalue(value);
  }

  hasVideos(value) {
    this.filter = 'HasVideos';
    return this.setvalue(value);
  }

  isActive(value) {
    this.filter = 'IsActive';
    return this.setvalue(value);
  }

  isDisabled(value) {
    this.filter = 'IsDisabled';
    return this.setvalue(value);
  }

  isFeatured(value) {
    this.filter = 'IsFeatured';
    return this.setvalue(value);
  }

  isRatingsOnly(value) {
    this.filter = 'IsRatingsOnly';
    return this.setvalue(value);
  }

  isRecommended(value) {
    this.filter = 'IsRecommended';
    return this.setvalue(value);
  }

  isSubjectActive(value) {
    this.filter = 'IsSubjectActive';
    return this.setvalue(value);
  }

  isSyndicated(value) {
    this.filter = 'IsSyndicated';
    return this.setvalue(value);
  }

  lastAnswerTime(value) {
    this.filter = 'LastAnswerTime';
    return this.setvalue(value);
  }

  lastModeratedTime(value) {
    this.filter = 'LastModeratedTime';
    return this.setvalue(value);
  }

  lastModificationTime(value) {
    this.filter = 'LastModificationTime';
    return this.setvalue(value);
  }

  lastQuestionTime(value) {
    this.filter = 'LastQuestionTime';
    return this.setvalue(value);
  }

  lastReviewTime(value) {
    this.filter = 'LastReviewTime';
    return this.setvalue(value);
  }

  lastStoryTime(value) {
    this.filter = 'LastStoryTime';
    return this.setvalue(value);
  }

  moderatorCode(value) {
    this.filter = 'ModeratorCode';
    return this.setvalue(value);
  }

  name(value) {
    this.filter = 'Name';
    return this.setvalue(value);
  }

  productBrandId(value) {
    this.filter = 'ProductBrandId';
    return this.setvalue(value);
  }

  productId(value) {
    this.filter = 'ProductId';
    return this.setvalue(value);
  }

  rating(value) {
    this.filter = 'Rating';
    return this.setvalue(value);
  }

  secondaryRating(value) {
    this.filter = 'SecondaryRating';
    return this.setvalue(value);
  }

  submissionId(value) {
    this.filter = 'SubmissionId';
    return this.setvalue(value);
  }

  submissionTime(value) {
    this.filter = 'SubmissionTime';
    return this.setvalue(value);
  }

  tag(value) {
    this.filter = 'Tag';
    return this.setvalue(value);
  }

  totalCommentCount(value) {
    this.filter = 'TotalCommentCount';
    return this.setvalue(value);
  }

  totalFeedbackCount(value) {
    this.filter = 'TotalFeedbackCount';
    return this.setvalue(value);
  }

  totalNegativeFeedbackCount(value) {
    this.filter = 'TotalNegativeFeedbackCount';
    return this.setvalue(value);
  }

  totalPositiveFeedbackCount(value) {
    this.filter = 'TotalPositiveFeedbackCount';
    return this.setvalue(value);
  }

  userLocation(value) {
    this.filter = 'UserLocation';
    return this.setvalue(value);
  }
}
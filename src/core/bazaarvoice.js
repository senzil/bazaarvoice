/**
 * Created by pablo on 2/8/16.
 */

'use strict';

import request from 'request';
import {putUrlParameter} from './utils';
import AbstractFilter from './AbstractFilter';

export default class Bazzarvoice {

  static get TYPES(){
    return {
      ANSWERS: 'Answers',
      AUTHOR: 'Author',
      CATEGORIES: 'Categories',
      COMMENTS: 'Comments',
      PRODUCTS: 'Products',
      QUESTIONS: 'Questions',
      REVIEWS: 'Reviews',
      /*@Deprecated*/
      STORIES: 'Stories'
    };
  }

  constructor(apikey, test) {
    if(!apikey && !test){
      throw new Error('You must get an apikey to use the bazaarvoice API');
    }
    const endpoint = 'http://api.bazaarvoice.com/[API]/[TYPE].json';
    const testendpoint = 'http://stg.api.bazaarvoice.com/[API]/[TYPE].json';
    const testkey = 'kuy3zj9pr3n7i0wxajrzj04xo';
    const version = '5.4';
    this.templateUrl = test?testendpoint:endpoint + '?apiversion=' + version + '&passkey=' + test?testkey:apikey;
    this.url = '';
  }

  get FILTERS(){
    return {
      PRODUCTS: {
        ID: 'id',
        AVERAGEOVERALLRATING: 'AverageOverallRating',
        CATEGORYANCESTORID: 'CategoryAncestorId',
        CATEGORYID: 'CategoryId',
        ISACTIVE: 'IsActive',
        ISDISABLED: 'IsDisabled',
        LASTANSWERTIME: 'LastAnswerTime',
        LASTQUESTIONTIME: 'LastQuestionTime',
        LASTREVIEWTIME: 'LastReviewTime',
        LASTSTORYTIME: 'LastStoryTime',
        NAME: 'Name',
        RATINGSONLYREVIEWCOUNT: 'RatingsOnlyReviewCount',
        TOTALANSWERCOUNT: 'TotalAnswerCount',
        TOTALQUESTIONCOUNT: 'TotalQuestionCount',
        TOTALREVIEWCOUNT: 'TotalReviewCount',
        TOTALSTORYCOUNT: 'TotalStoryCount'
      }
    };
  }



  get SORTS(){
    return {
      REVIEWS: {
        ID: 'Id',
        ADDITIONALFIELD: 'AdditionalField_[FIELD_NAME]',
        AUTHORID: 'AuthorId',
        CAMPAIGNID: 'CampaignId',
        CONTENTLOCALE: 'ContentLocale',
        CONTEXTDATAVALUE: 'ContextDataValue_[DIMENSION_EXTERNAL_ID]',
        HASCOMMENTS: 'HasComments',
        HASPHOTOS: 'HasPhotos',
        HASTAGS: 'HasTags',
        HASVIDEOS: 'HasVideos',
        HELPFULNESS: 'Helpfulness',
        ISFEATURED: 'IsFeatured',
        ISRATINGSONLY: 'IsRatingsOnly',
        ISRECOMMENDED: 'IsRecommended',
        ISSUBJECTACTIVE: 'IsSubjectActive',
        ISSYNDICATED: 'IsSyndicated',
        LASTMODERATEDTIME: 'LastModeratedTime',
        LASTMODIFICATIONTIME: 'LastModificationTime',
        PRODUCTID: 'ProductId',
        RATING: 'Rating',
        SECONDARYRATING: 'SecondaryRating_[RATING_NAME]',
        SUBMISSIONID: 'SubmissionId',
        SUBMISSIONTIME: 'SubmissionTime',
        TOTALCOMMENTCOUNT: 'TotalCommentCount',
        TOTALFEEDBACKCOUNT: 'TotalFeedbackCount',
        TOTALNEGATIVEFEEDBACKCOUNT: 'TotalNegativeFeedbackCount',
        TOTALPOSITIVEFEEDBACKCOUNT: 'TotalPositiveFeedbackCount',
        USERLOCATION: 'UserLocation'
      },
      PRODUCTS: {
        ID: 'id',
        AVERAGEOVERALLRATING: 'AverageOverallRating',
        CATEGORYID: 'CategoryId',
        ISACTIVE: 'IsActive',
        ISDISABLED: 'IsDisabled',
        LASTANSWERTIME: 'LastAnswerTime',
        LASTQUESTIONTIME: 'LastQuestionTime',
        LASTREVIEWTIME: 'LastReviewTime',
        LASTSTORYTIME: 'LastStoryTime',
        NAME: 'Name',
        RATINGSONLYREVIEWCOUNT: 'RatingsOnlyReviewCount',
        TOTALANSWERCOUNT: 'TotalAnswerCount',
        TOTALQUESTIONCOUNT: 'TotalQuestionCount',
        TOTALREVIEWCOUNT: 'TotalReviewCount',
        TOTALSTORYCOUNT: 'TotalStoryCount'
      }
    };
  }

  //Conversation API
  conversations(){
    var pattern = /\[API\]/i;
    this.url = this.constructor.templateUrl.replace(pattern, 'data');
    return this;
  }

  reviews() {
    var pattern = /\[TYPE\]/i;
    this.url = this.url.replace(pattern, 'reviews');
    return this;
  }

  productos() {
    var pattern = /\[TYPE\]/i;
    this.url = this.url.replace(pattern, 'products');
    return this;
  }

  attributes(attr) {
    putUrlParameter(this.url, 'Attributes', attr);
    return this;
  }

  callback(cb) {
    putUrlParameter(this.url, 'Callback', cb);
    return this;
  }

  excludeFamily(bool) {
    putUrlParameter(this.url, 'ExcludeFamily', bool);
    return this;
  }

  filter(_filter) {
    if(!_filter instanceof AbstractFilter && !_filter instanceof String){
      throw new Error('You must use a filter onject or a string with filter definition');
    }
    putUrlParameter(this.url, 'Filter', _filter);
    return this;
  }

  filterType(type, _filter) {
    if(!_filter instanceof AbstractFilter && !_filter instanceof String){
      throw new Error('You must use a filter onject or a string with filter definition');
    }
    putUrlParameter(this.url, 'Filter_' + type, _filter);
    return this;
  }

  include(entity) {
    putUrlParameter(this.url, 'Include', entity);
    return this;
  }

  limit(_limit) {
    putUrlParameter(this.url, 'Limit', _limit);
    return this;
  }

  limitType(type, _limit) {
    putUrlParameter(this.url, 'Limit_' + type, _limit);
    return this;
  }

  locale(_locale) {
    putUrlParameter(this.url, 'Locale', _locale);
    return this;
  }

  offset(_offset) {
    putUrlParameter(this.url, 'Offset', _offset);
    return this;
  }

  search(_search) {
    putUrlParameter(this.url, 'Search', _search);
    return this;
  }

  searchType(type, _search) {
    putUrlParameter(this.url, 'Search_' + type, _search);
    return this;
  }

  sort(_sort, desc) {
    putUrlParameter(this.url, 'Sort', _sort + (desc ? ':desc' : ':asc'), true);
    return this;
  }

  sortType(type, _sort, desc) {
    putUrlParameter(this.url, 'Sort_' + type, _sort + (desc ? ':desc' : ':asc'), true);
    return this;
  }

  stats(_option) {
    putUrlParameter(this.url, 'Stats', _option);
    return this;
  }

  promise() {
    return new Promise(function(resolve, reject) {
      console.log(this.url);

      request({url: this.url}, function(err, response, body) {
        if(err) {
          return reject(err);
        }

        var obj = JSON.parse(body);

        if(response.statusCode === 400) {
          return reject(obj.Error);
        }

        if(obj.HasErrors) {
          reject(obj.Errors);
        }

        return resolve(obj);
      });
    });
  }
}



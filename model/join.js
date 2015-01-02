/**
 * 招聘模型
 * @ignore
 */
var JobSchema = new Schema({
  job_id: {
    type: ObjectId
  },
  job_name: {
    type: String,
    index: true // 建立索引
  },
  /**
   * 招聘人数
   * @type {Number}
   */
  job_count: {
    type: Number,
    default: 1
  },
  /**
   * 岗位要求
   * @type {String}
   */
  job_requre: {
    type: String
  },
  /**
   * 岗位信息是否有效
   * @type {Boolean}
   */
  job_valid: {
    type: Boolean,
    default: true
  },
  /**
   * 招聘类型
   * @type {String}
   */
  job_type: {
    type: String
  },
  /**
   * 创建日期
   * @type {Object}
   */
  create_at: {
    type: Date,
    default: Date.now
  }
});

/**
 * 团队模型
 * @ignore
 */
var TeamSchema = new Schema({
  team_id: {type: ObjectId},
  team_content: {type: String},
  create_at: {
    type: Date,
    default: Date.now
  }
});

/**
 * 成长空间
 * @ignore
 */
var GrowupSchema = new Schema({
  growup_id: {type: ObjectId},
  growup_content: {type: String},
  create_at: {
    type: Date,
    default: Date.now
  }
});
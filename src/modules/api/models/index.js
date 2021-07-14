const sequelize = require("../config/database");

const Comment = require("./Comment");
const Employee = require("./Employee");
const EmployeeInterest = require("./EmployeeInterest");
const Media = require("./Media");
const Post = require("./Post");
const Reaction = require("./Reaction");

Post.belongsTo(Employee);
Employee.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

Reaction.belongsTo(Comment);
Comment.hasMany(Reaction);

Comment.belongsTo(Comment,{foreignKey: 'parent_comment_id',});
Comment.hasMany(Comment,{foreignKey: 'parent_comment_id',});

Reaction.belongsTo(Post);
Post.hasMany(Reaction);

Reaction.belongsTo(Employee);
Employee.hasMany(Reaction);

Media.belongsTo(Post);
Post.hasMany(Media);

const Post_Tag = sequelize.define('Post_Tag', {}, { timestamps: false });
Employee.belongsToMany(Post, { through: Post_Tag });
Post.belongsToMany(Employee, { through: Post_Tag });

EmployeeInterest.belongsTo(Employee);
Employee.hasMany(EmployeeInterest);

sequelize.sync({force:true});

export {Comment,Employee,EmployeeInterest,Media,Post,Reaction}
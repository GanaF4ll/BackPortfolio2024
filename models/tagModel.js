"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagClass = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let tagSchema = new Schema({
    key: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("Tag", tagSchema);
class TagClass {
    constructor(key, color) {
        this.key = key;
        this.color = color;
    }
    toString() {
        return this.key;
    }
}
exports.TagClass = TagClass;
TagClass.ANGULAR = new TagClass("Angular", "red");
TagClass.REACT = new TagClass("React", "#08E5FA");
TagClass.TYPESCRIPT = new TagClass("Typescript", "#007ACC");
TagClass.NODE = new TagClass("Node", "#0B6B09");
TagClass.PHP = new TagClass("PHP", "#777BB3");
TagClass.JAVASCRIPT = new TagClass("Javascript", "#FFDE59");
TagClass.MONGODB = new TagClass("Mongodb", "#00FA03");
TagClass.DOCKER = new TagClass("Docker", "#38B6FF");
TagClass.TAILWIND = new TagClass("Tailwind", "#5CE1E6");
TagClass.SCSS = new TagClass("SCSS", "#D18ECF");
TagClass.BOOTSTRAP = new TagClass("Bootstrap", "#8C52FF");
TagClass.APPWRITE = new TagClass("Appwrite", "#FF009D");
TagClass.SQLSERVER = new TagClass("SQLSERVER", "#808080");
TagClass.FLUTTER = new TagClass("Flutter", "#3399ff");

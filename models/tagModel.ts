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

export class TagClass {
  static readonly ANGULAR = new TagClass("Angular", "red");
  static readonly REACT = new TagClass("React", "#08E5FA");
  static readonly TYPESCRIPT = new TagClass("Typescript", "#007ACC");
  static readonly NODE = new TagClass("Node", "#0B6B09");
  static readonly PHP = new TagClass("PHP", "#777BB3");
  static readonly JAVASCRIPT = new TagClass("Javascript", "#FFDE59");
  static readonly MONGODB = new TagClass("Mongodb", "#00FA03");
  static readonly DOCKER = new TagClass("Docker", "#38B6FF");
  static readonly TAILWIND = new TagClass("Tailwind", "#5CE1E6");
  static readonly SCSS = new TagClass("SCSS", "#D18ECF");
  static readonly BOOTSTRAP = new TagClass("Bootstrap", "#8C52FF");
  static readonly APPWRITE = new TagClass("Appwrite", "#FF009D");
  static readonly SQLSERVER = new TagClass("SQLSERVER", "#808080");
  static readonly FLUTTER = new TagClass("Flutter", "#3399ff");

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}


class ExampleFileHandlingInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "fileObject": {
        "name": "document",
        "type": "file",
        "description": "file uploaded to local",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleFileHandlingInitalize;
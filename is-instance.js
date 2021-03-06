var NoDefault = require('./lib/no-default')
  , ModelGenerator = require('./lib/model-generator')
  , Comparator = require('./lib/class-comparator')
  , compare = Comparator(function (model, other) {
    return typeof(model) === typeof(other)
  })

var IsInstance = function (classyClass) {
  var Model = ModelGenerator(classyClass)

  classyClass.isInstance = function (someObject) {
    return compare(Model(), someObject)
  }
}

module.exports = IsInstance

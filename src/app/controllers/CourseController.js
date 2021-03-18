const Course = require("../models/Course");
const { mongooseToOject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courseDetail) =>
        res.render("courses/show", {
          courseDetail: mongooseToOject(courseDetail),
        })
      )
      .catch(next);
  }
}

module.exports = new CourseController();

function Student(
  id,
  name,
  email,
  dateOfBirth,
  course,
  math,
  physics,
  chemistry
) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.dateOfBirth = dateOfBirth;
  this.course = course;
  this.math = math;
  this.physics = physics;
  this.chemistry = chemistry;
}

Student.prototype.calcScore = function () {
  return ((+this.math + +this.physics + +this.chemistry) / 3).toFixed(1);
};

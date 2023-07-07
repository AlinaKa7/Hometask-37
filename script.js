const roles = {
admin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7TKHo1NrGHSRkso1dt1oE04qoPOGEKCiUA&usqp=CAU",
student: "https://ouch-cdn2.icons8.com/7DP-l69rylAk3O-c93Nbfj2650_1R5wZXWIXe0xuNnM/rs:fit:256:269/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODQ4/L2UxMWRiMzJkLTg0/ODctNDExOS05OWY0/LTE2ZWJmYWUzMTU4/Mi5zdmc.png",
lector: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6IXU6e-XItRgx50m-ACZarCacde2oAB8LGowKpZYy_0l_J9-7MZyDWlD8Blab8m3Uy8&usqp=CAU"
};

const gradation = {
20: "satisfactory",
55: "good",
85: "very-good",
100: "excellent"
};

const users = [
{
  name: "Jack Smith",
  age: 23,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ2r09NH8bmygAlO90xDozBAPuGwik-Hatg&usqp=CAU",
  role: "student",
  courses: [
    {
      "title": "Front-end Pro",
      "mark": 20
    },
    {
      "title": "Java Enterprise",
      "mark": 100
    }
  ]
},
{
  name: "Amal Smith",
  age: 20,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ2r09NH8bmygAlO90xDozBAPuGwik-Hatg&usqp=CAU",
  role: "student"
},
{
  name: "Noah Smith",
  age: 43,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ2r09NH8bmygAlO90xDozBAPuGwik-Hatg&usqp=CAU",
  role: "student",
  courses: [
    {
      "title": "Front-end Pro",
      "mark": 50
    }
  ]
},
{
  name: "Charlie Smith",
  age: 18,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ2r09NH8bmygAlO90xDozBAPuGwik-Hatg&usqp=CAU",
  role: "student",
  courses: [
    {
      "title": "Front-end Pro",
      "mark": 75
    },
    {
      "title": "Java Enterprise",
      "mark": 23
    }]
},
{
  name: "Emily Smith",
  age: 30,
  img: "https://galaxyproject.org/images/undraw-illustrations/galaxy-for-admins.svg",
  role: "admin",
  courses: [
    {
      "title": "Front-end Pro",
      "score": 10,
      "lector": "Leo Smith"
    },
    {
      "title": "Java Enterprise",
      "score": 50,
      "lector": "David Smith"
    },
    {
      "title": "QA",
      "score": 75,
      "lector": "Emilie Smith"
    }]
},
{
  name: "Leo Smith",
  age: 253,
  img: "https://cdn1.iconfinder.com/data/icons/university-indigo-vol-2/256/Professor-512.png",
  role: "lector",
  courses: [
    {
      "title": "Front-end Pro",
      "score": 78,
      "studentsScore": 79
    },
    {
      "title": "Java Enterprise",
      "score": 85,
      "studentsScore": 85
    }
  ]
}
]

class User {
constructor(name, age, img, role, courses) {
  this.name = name;
  this.age = age;
  this.img = img;
  this.role = role;
  this.courses = courses;
}

render() {
  
  let data = document.write(`
    <div class="container">
    <div class="container__user__info">
      <div class="container__user__info--data">
        <img src="${this.img}" alt="${this.name}" height="50">
        <div class="container__user__naming">
        <p>Name: <b>${this.name}</b></p>
        <p>Age: <b>${this.age}</b></p>
        </div>
      </div>
    </div>
    <div class="container__user__info--role ${this.role}">
      <img src="${roles[this.role]}" alt="${this.role}" height="25">
      <p>${this.role}</p>
    </div>
    </div>`)
  return data;
  }

  renderCourses() {
    if (this.courses && this.courses.length > 0) {
      this.courses.forEach((course) => {
        let mark = '';

        if (this instanceof Student && "mark" in course) {
          mark = course.mark;
        } else if ((this instanceof Admin || this instanceof Lector) && "score" in course) {
          mark = course.score;
        }

        let markGradation = "";
        let markClass = "";

        if (mark >= 20 && mark <= 55) {
          markGradation = "satisfactory";
          markClass = "satisfactory";
        } else if (mark > 55 && mark <= 84) {
          markGradation = "good";
          markClass = "good";
        } else if (mark > 84 && mark <= 90) {
          markGradation = "very-good";
          markClass = "very-good";
        } else if (mark === 100){
          markGradation = "excellent";
          markClass = "excellent";
        } else {
          markGradation = "requires improvement";
          markClass = "requires-improvement";
        }
        
        let courseInfo = "";

        if (this instanceof Student) {
          courseInfo = `<div class="container__user__courses">
          <p class="container__user__courses--course student">
          ${course.title} <span class="${markClass}">${markGradation}</span>
          </p>
        </div>`;
        } else if (this instanceof Admin) {
          const title = course.title;
          const score = course.score;
          const lector = course.lector;
          courseInfo = `<div class="container__user__courses--course admin">
          <p class="admin--info">
            <span>Title: <b>${title}</b></span><br>
            <span>Admin's score: <span class="${markClass}">${markGradation}</span></span><br>
            <span>Lector: <b>${lector}</b></span>
          </p>
        </div>`;
        } else {
          const title = course.title;
          const score = course.score;
          const studentsScore = course.studentsScore;
          courseInfo = `<div class="container__user__courses--course lector">
          <p class="lector--info">
            <span>Title: <b>${title}</b></span><br>
            <span>Lector's score: <span class="${markClass}">${markGradation}</span></span><br>
            <span>Average student's score: <span class="${markClass}">${markGradation}</span></span>
          </p>
        </div>`;
        }
        document.write(courseInfo);
      });
    }
  }
}

class Student extends User{
  constructor(name, age, img, role, courses) {
    super(name, age, img, role, courses);
  }

  renderCourses() {
    super.renderCourses();
  }
}

class Admin extends User {
  constructor(name, age, img, role, courses) {
    super(name, age, img, role, courses);
  }

  renderCourses() {
    super.renderCourses();
  }
}

class Lector extends User {
  constructor(name, age, img, role, courses) {
    super(name, age, img, role, courses);
  }

  renderCourses() {
    super.renderCourses();
  }
}

users.forEach(function (user) {
  let userOptions;

  if (user.role === 'student') {
    userOptions = new Student(user.name, user.age, user.img, user.role, user.courses);
  } else if (user.role === 'admin') {
    userOptions = new Admin(user.name, user.age, user.img, user.role, user.courses);
  } else if (user.role === 'lector') {
    userOptions = new Lector(user.name, user.age, user.img, user.role, user.courses);
  }

  if (userOptions) {
    userOptions.render();
    userOptions.renderCourses();
  }
});
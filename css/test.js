const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "https://www.svgrepo.com/show/10103/man.svg",
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
        img: "https://www.svgrepo.com/show/113567/indian.svg",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "https://www.svgrepo.com/show/48218/man.svg",
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
        img: "https://www.svgrepo.com/show/169746/man.svg",
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
        img: "https://www.svgrepo.com/show/161467/woman.svg",
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
        img: "https://www.svgrepo.com/show/51654/professor.svg",
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
    constructor(name, age, role, img, courses){
        this.name = name;
        this.age = age;
        this.role = role;
        this.img = img;
        this.courses = courses;
    }
    render(){
        let data = document.write(`<div class="user__info">
                            <div class="user__info--data">
                                <img src="${this.img}" alt="${this.name}" height="50">
                                <div class="user__naming">
                                <p>Name: <b>${this.name}</b></p>
                                <p>Age: <b>${this.age}</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="user__info--role ${this.role}">
                            <img src="${roles[this.role]}" alt="${this.role}" height="25">
                            <p>${this.role}</p>
                        </div>`)
 
        return data;
 
    }
    renderCourses(){
    }
    renderAge(){
        // console.log(`${this.age}`)
    }
}
 
 
class Student extends User{
    constructor(name, age, role, img, courses){
        super(name, age, role, img, courses);
    }
    renderCourses(){
        super.renderCourses();
    console.log(`Im ${this.courses}`);
 
    }
}
users
    .forEach(function(user) {
        if(user.role === 'student'){
            let student = new Student(user.name, user.age, user.role, user.img, user.courses);
            student.render();
            student.renderAge();
            console.log(`Im ${student.name}, im a ${student.role}, ${student.age} years old, learning ${student.courses}`)
        }
        
    })




    /////////////
    const users = [
        {
            name: "Jack Smith",
            age: 23,
            img: "https://www.svgrepo.com/show/10103/man.svg",
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
            img: "https://www.svgrepo.com/show/113567/indian.svg",
            role: "student"
        },
        {
            name: "Noah Smith",
            age: 43,
            img: "https://www.svgrepo.com/show/48218/man.svg",
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
            img: "https://www.svgrepo.com/show/169746/man.svg",
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
            img: "https://www.svgrepo.com/show/161467/woman.svg",
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
            img: "https://www.svgrepo.com/show/51654/professor.svg",
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
        constructor(name, age, role, img, courses){
            this.name = name;
            this.age = age;
            this.role = role;
            this.img = img;
            this.courses = courses;
        }
        render(){
            let data = document.write(`<div class="user__info">
                                <div class="user__info--data">
                                    <img src="${this.img}" alt="${this.name}" height="50">
                                    <div class="user__naming">
                                    <p>Name: <b>${this.name}</b></p>
                                    <p>Age: <b>${this.age}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="user__info--role ${this.role}">
                                <img src="${roles[this.role]}" alt="${this.role}" height="25">
                                <p>${this.role}</p>
                            </div>`)
     
            return data;
     
        }
        renderCourses(){
        }
        renderAge(){
            // console.log(`${this.age}`)
        }
    }
     
     
    class Student extends User{
        constructor(name, age, role, img, courses){
            super(name, age, role, img, courses);
        }
        renderCourses(){
            super.renderCourses();
        console.log(`Im ${this.courses}`);
     
        }
    }
    users
        .forEach(function(user) {
            if(user.role === 'student'){
                let student = new Student(user.name, user.age, user.role, user.img, user.courses);
                student.render();
                student.renderAge();
                console.log(`Im ${student.name}, im a ${student.role}, ${student.age} years old, learning ${student.courses}`)
            }
            
        })



        ////////////
        class Student extends User{
          
                constructor(name, age, role, img, courses){
           
                    super(name, age, role, img, courses);
            
                }
            
                renderCourses(){
          
                super.renderCourses();
          
                let courses = 'no courses';
           
                if(this.courses && this.courses.length) courses = `<p>Courses: </p>` + this.courses.map(a => `<div>${a.title}</div>`).join('');
            
                return courses
            
                }
            
            }
            

                //   </div>
    //   <div class="user__courses">
    //     <p class="user__courses--course student">
    //       Front-end Pro <span class="satisfactory">Satisfactory</span>
    //     </p>
    //     <p class="user__courses--course student">
    //       Front-end Basic <span class="very-good">Very Good</span>
    //     </p>
    //     <p class="user__courses--course student">
    //       React <span class="good">Good</span>
    //     </p>
    //     <p class="user__courses--course student">
    //       Java Elementary <span class="excellent">Excellent</span>
    //     </p>
    //   </div>

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
            let coursesInfo = "<div class='user__courses'><h3>Courses:</h3><ul>";
            this.courses.forEach((course) => {
              if ("mark" in course) {
                coursesInfo += `<li>${course.title}: ${course.mark} (${gradation[course.mark]})</li>`;
              }
            });
            coursesInfo += "</ul></div>";
            document.write(coursesInfo);
          } else {
            document.write("<div class='user__courses'><p>No courses enrolled.</p></div>");
          }
        }
      }
      
      class Student extends User {
        constructor(name, age, img, role, courses) {
          super(name, age, img, role, courses);
        }
      
        renderCourses() {
          super.renderCourses();
        }
      }
      
      users.forEach(function(user) {
        if (user.role === 'student') {
          let student = new Student(user.name, user.age, user.img, user.role, user.courses);
          student.render();
          student.renderCourses();
        }
      });
      
<template>
  <div class="list-row">
    <h4> Courses view </h4>
    <button @click="addCourse">Add Course</button>
    <button @click="updateCourse">Update Course</button>
    <button @click="deleteCourse">Delete Course</button>
    <div class="col-md-8 sticky-top">
      <div class="input-group mb-3">
        <input 
          type="text"
          class="form-control"
          placeholder="search by name or course number"
          v-model="searchVal"
        />
        <button @click="searchVal=''">clear search</button>
      </div>
    </div>
    <div class="col-md-8">
      <h4> Courses </h4>
      <div class="card">
        <table class="table" style="border-radius: 5px;">
          <thead class="" style="background-color: #f2f3f4;">
            <tr>
              <th scope="col">Course Number</th>
              <th scope="col">Name</th>
              <th scope="col">Level</th>
              <th scope="col">Hours</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              class="table-group-item"
              v-for="(course, index) in coursesFiltered"
              :key="index"
            >
              <td>{{ course.courseNumber }}</td>
              <td>{{ course.name }}</td>
              <td>{{ course.level }}</td>
              <td>{{ course.housr }}</td>
              <td>{{ course.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import cds from '../services/CourseDataService';
export default {
  name: 'course-list'
  ,data() {
    return {
      helloworld: 'Hello world'
      ,courses: []
      ,searchVal: ''
      ,changeCourse: 'this.courses[0]'
      ,newCourse: {
        courseNumber: 'test-0004'
        ,name: 'tes4'
        ,department: 'test'
        ,level: 0
        ,housr: 0
        ,description: 'testing 4'
      }
    }
  }
  ,methods: {
    fetchAll() {
      cds.getAll()
      .then((res) => {
        this.courses = res.data;
        console.log(this.courses);
      })
      .catch((e) => {
        console.log(e);
      })
    }
    ,addCourse() {
      console.log(this.newCourse);
      var data = {
        name: this.newCourse.name
        ,department: this.newCourse.department
        ,courseNumber: this.newCourse.courseNumber
        ,level: this.newCourse.level
        ,housr: this.newCourse.housr
        ,description: this.newCourse.description
      }
      cds.create(data)
        .then(response => {
          console.log(response.data);
          this.fetchAll();
        })
        .catch(e => {
          console.log(e);
        })
    }
    ,updateCourse() {
      var data = {...this.courses[0]};
      data.description = 'update test'
      data.createdAt = '0000-00-00 00:00:00';
      console.log(data);
      cds.update(data.id, data)
        .then(response => {
          console.log(response.data);
          this.fetchAll();
        })
        .catch(e => {
          console.log(e);
        })
    }
    ,deleteCourse() {
      cds.delete(this.courses[1].id)
      .then(response => {
          console.log(response.data);
          this.fetchAll();
        })
        .catch(e => {
          console.log(e);
        })
    }
  }
  ,computed: {
    coursesFiltered() {
      if(this.searhVal == ''){
        return this.courses;
      } else {
        return this.courses.filter(c => (c.courseNumber.indexOf(this.searchVal.toUpperCase()) > -1 || c.name.toLowerCase().indexOf(this.searchVal.toLowerCase()) > -1));
      }
    }
  }
  ,mounted() {
    this.fetchAll();
  } 

}
</script>

<!-- <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->

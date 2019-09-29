<template>
  <div class="registration">
    <h2 class="center">Mitrais Coding Test</h2>

      <div :class="[{'is-disabled': isSuccess}, 'content']">
        <h2>Registration</h2>

        <input type="text" placeholder="Mobile Number" v-model="registration.phone" />
        <error v-if="submitted && $v.registration.phone.$error">
          <p class="text-red" v-if="!$v.registration.phone.required">Mobile number is required</p>
          <p
            class="text-red"
            v-if="!$v.registration.phone.isIndonesiaPhone"
          >Mobile number format is wrong</p>
        </error>

        <input type="text" placeholder="First Name" v-model="registration.firstName" />
        <error v-if="submitted && $v.registration.firstName.$error">
          <span class="text-red" v-if="!$v.registration.firstName.required">First Name is required</span>
        </error>

        <input type="text" placeholder="Last Name" v-model="registration.lastName" />
        <error v-if="submitted && $v.registration.lastName.$error">
          <span class="text-red" v-if="!$v.registration.lastName.required">Last Name is required</span>
        </error>

        <p for="dob">Date of Birth</p>
        <select v-model="month">
          <option
            v-for="month in list_month"
            :key="month.value"
            :value="month.value"
          >{{ month.text }}</option>
        </select>
        <select v-model="day">
          <option v-for="year in list_year" :key="year.value" :value="year.value">{{ year.text }}</option>
        </select>
        <select v-model="year">
          <option v-for="date in list_date" :key="date.value" :value="date.value">{{ date.text }}</option>
        </select>

        <div class="radio-class margin-radio">
          <input type="radio" id="male" name="gender" v-model="registration.gender" />
          <label for="male">Male</label>

          <input type="radio" id="female" name="gender" v-model="registration.gender" />
          <label for="female">Female</label>
        </div>

        <input type="text" placeholder="Email" v-model="registration.email" />
        <error v-if="submitted && $v.registration.email.$error">
          <span class="text-red" v-if="!$v.registration.email.required">Email is required</span>
        </error>

        <button class="button" @click="submit($event)">Registration</button>
      </div>

      <div :class="['content-login center', {'is-login' : !isSuccess}]" >
        <button class="button" @click="login">Login</button>
      </div>

  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { isIndonesiaPhone } from "../validator/validator.js";

export default {
  name: "registration",
  data: () => {
    return {
      registration: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        gender: ""
      },
      year: "",
      month: "",
      day: "",
      submitted: false,
      isSuccess: false,
      list_year: [],
      list_date: [],
      list_month: [
        {
          text: "Januari",
          value: 1
        },
        {
          text: "Februari",
          value: 2
        },
        {
          text: "Maret",
          value: 3
        },
        {
          text: "April",
          value: 4
        },
        {
          text: "Mei",
          value: 5
        },
        {
          text: "Juni",
          value: 6
        },
        {
          text: "Juli",
          value: 7
        },
        {
          text: "Agustus",
          value: 8
        },
        {
          text: "September",
          value: 9
        },
        {
          text: "Oktober",
          value: 10
        },
        {
          text: "November",
          value: 11
        },
        {
          text: "Desember",
          value: 12
        }
      ]
    };
  },
  validations: {
    registration: {
      email: { required },
      firstName: { required },
      lastName: { required },
      phone: { required, isIndonesiaPhone }
    }
  },
  created() {
    this.getYear();
    this.getDate();
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
    submit(e) {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.isSuccess = true;
      this.$refs.login.hidden = false

    },
    getYear() {
      for (let y = 1980; y < 2019; y++) {
        this.list_year.push({
          value: y,
          text: y
        });
      }
    },
    getDate() {
      for (let z = 1; z < 32; z++) {
        this.list_date.push({
          value: z,
          text: z
        });
      }
    }
  }
};
</script>

<style>
   @import '../assets/register.css';
</style>

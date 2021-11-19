<template>
  <el-card class="signup-form-wrapper" v-loading="loading">
    <div class="signup-form-heading">Exchangeagram</div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="formRule"
      label-position="top"
      :hide-required-asterisk="true"
    >
      <!-- username -->
      <el-form-item label="Username" prop="username">
        <el-input
          v-model="form.username"
          autocomplete="off"
          placeholder="Username"
          @keydown.enter="signUpButtonClick()"
        />
      </el-form-item>
      <!-- email -->
      <el-form-item label="Email" prop="email">
        <el-input
          v-model="form.email"
          autocomplete="off"
          placeholder="Email"
          @keydown.enter="signUpButtonClick()"
        />
      </el-form-item>
      <!-- password -->
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          autocomplete="off"
          placeholder="Password"
          @keydown.enter="signUpButtonClick()"
        />
      </el-form-item>
      <!-- action buttons -->
      <el-form-item>
        <!-- signup button -->
        <el-button
          class="signup-button"
          type="primary"
          @click="signUpButtonClick()"
        >
          Sign Up
        </el-button>
        <!-- login button -->
        <el-button
          class="login-button"
          type="text"
          @click="loginButtonClick()"
        >
          Already have an account? Login.
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthClient from '@/http/client/authClient'
import SignUpFormInterface from '@/classes/interface/signUpFormInterface'

export default defineComponent({
  setup () {
    const router = useRouter()
    const formRef: Ref = ref(null)
    const form: Ref<SignUpFormInterface> = ref({
      username: '',
      email: '',
      password: ''
    })
    const loading: Ref<boolean> = ref(false)

    const formRule: Ref = ref({
      username: [
        {
          required: true,
          message: 'Please input username',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ],
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ]
    })

    async function signUpButtonClick () {
      const formValid = await formRef.value.validate()
      if (!formValid) return

      loading.value = true
      const response: boolean = await AuthClient.userSignUp(form.value)
      loading.value = false
      if (response) {
        router.push({ name: 'Login' })
      }
    }

    async function loginButtonClick () {
      router.push({ name: 'Login' })
    }

    return {
      form,
      formRule,
      formRef,
      loginButtonClick,
      signUpButtonClick,
      loading
    }
  }
})
</script>

<style scoped>
.signup-form-wrapper {
  width: 100%;
  max-width: 450px;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  border-radius: 10px;
}

.signup-form-heading {
  font-size: 35px;
  font-weight: bold;
  color: #000;
  text-align: center;
  font-family: "Lobster", Arial, Helvetica, sans-serif;
  margin-bottom: 25px;
}

.login-button {
  margin-top: 25px;
  width: 100%;
}

.signup-button {
  margin-top: 25px;
  width: 100%;
}
</style>

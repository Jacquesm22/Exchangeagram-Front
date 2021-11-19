<template>
  <el-card class="login-form-wrapper">
    <div class="login-form-heading">Exchangeagram</div>
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
          @keydown.enter="loginButtonClick()"
        />
      </el-form-item>
      <!-- password -->
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          autocomplete="off"
          placeholder="Password"
          @keydown.enter="loginButtonClick()"
        />
      </el-form-item>
      <!-- action buttons -->
      <el-form-item>
        <!-- login button -->
        <el-button
          class="login-button"
          type="primary"
          @click="loginButtonClick()"
        >
          Login
        </el-button>
        <!-- sign up button -->
        <el-button
          class="signup-button"
          type="text"
          @click="signUpButtonClick()"
        >
          Don't have an account? Sign up.
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import LoginFormInterface from '@/classes/interface/loginFormInterface'
import { useRouter } from 'vue-router'
import AuthClient from '@/http/client/authClient'

export default defineComponent({
  setup () {
    const router = useRouter()
    const formRef: Ref = ref(null)
    const form: Ref<LoginFormInterface> = ref({
      username: '',
      password: ''
    })

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
      ]
    })

    async function loginButtonClick () {
      const formValid = await formRef.value.validate()
      if (!formValid) return

      const response: boolean = await AuthClient.userCredentialLogin(form.value)
      if (response) {
        router.push({ name: 'Home' })
      }
    }

    async function signUpButtonClick () {
      // TODO: Implement
      alert('Not Implemented')
    }

    return {
      form,
      formRule,
      formRef,
      loginButtonClick,
      signUpButtonClick
    }
  }
})
</script>

<style scoped>
.login-form-wrapper {
  width: 100%;
  max-width: 450px;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  border-radius: 10px;
}

.login-form-heading {
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

<template>
  <div class="avatar-holder">
    <img
      class="bg-avatar"
      src="../../assets/bg_avatar.png"
      alt="bg-avatar" />
    <!-- <input type="file" class="upload-input" ref="upload" v-on:change="handleOnChange()" /> -->
    <div
      class="wrap-photo has-text-centered"
      :class="{'no-upload-photo': !avatar}"
      :style="{ backgroundImage: 'url(' +  avatar + ')' }"
    >
      <identicon
        v-if="!avatar"
        class="identicon"
        :address="$store.state.profile.address"></identicon>
      <!--
      <div v-show="edit" class="add-button" @click="openUpload">
          <img src="../../assets/icon_add_photo.png" alt="photo" />
      </div>
      -->
    </div>
  </div>
</template>

<script>
import Identicon from '../elements/Identicon';

export default {
  name: 'ProfileAvatar',
  components: {
    Identicon,
  },
  props: ['edit', 'show'],
  data() {
    return {
      avatar: '',
    };
  },
  /**
  methods: {
    openUpload() {
      this.$refs.upload.click();
    },
    handleOnChange() {
      const reader = new FileReader();
      reader.readAsDataURL(this.$refs.upload.files[0]);
      const self = this;
      reader.onload = async () => {
        this.avatar = reader.result;
        const buffer = await Buffer.from(reader.result);
        ipfs.add(buffer, (err, ipfsHash) => {
          if (err) {
            return;
          }
          const result = ipfsHash[0];
          const formData = new FormData();
          formData.set('path', result.path);
          self.$mautic.submitForm(7, formData);
        });
      };
    },
  },
  * */
};
</script>

<style scoped>
.avatar-holder {
  width: 200px;
  height: 200px;
}

.wrap-photo {
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(0deg, #4B2A06 0%, #6C3D09 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 80px 0 rgba(108, 61, 9, .6);
}

.no-upload-photo {
  background-image: linear-gradient(0deg, #4B2A06 0%, #6C3D09 100%)!important;
}

.add-button {
  position: absolute;
  height: 34px;
  width: 34px;
  background-color: #fef7e3;
  border-radius: 50%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  cursor: pointer;
}

.absolute-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.upload-text {
  color: #FEF7E3;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 25px;
  font-family: "Core Sans A 65";
}

.bg-avatar {
  width: 200px;
  height: 200px;
}

.upload-input {
  display: none;
}

.add-button img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script lang="ts" setup>
const comments = ref([
  {
    avatar: "Images/James-Brown.svg",
    name: "James Brown",
    comment: "Parabéns, Matthew! 🔥",
    liked: true,
  },
  {
    avatar: "Images/Lena-Muller.svg",
    name: "Lena Müller",
    comment: "Ótimo trabalho! 🤗",
    liked: true,
  },
  {
    avatar: "Images/Juma-Omondi.svg",
    name: "Juma Omondi",
    comment: "O céu é o limite! ⚡️",
    liked: false,
  },
]);
</script>

<template>
  <div class="spotlight-comment-section">
    <div class="spotlight-comment-item" v-for="item in comments">
      <div class="spotlight-comment">
        <img :src="item.avatar" class="spotlight-comment-author-avatar" />

        <div class="spotlight-comment-author">
          <span class="spotlight-comment-name"> {{ item.name }} </span>
          <span class="spotlight-comment-text"> {{ item.comment }} </span>
        </div>

        <button
          v-if="item.liked"
          class="spotlight-comment-like"
          @click="item.liked = !item.liked"
        >
          <img src="/DashIcons/heart-full.svg" />
        </button>

        <button
          v-else
          class="spotlight-comment-like"
          @click="item.liked = !item.liked"
        >
          <img src="/DashIcons/heart-empty.svg" />
        </button>
      </div>

      <div class="spotlight-comment-divider"></div>
    </div>

    <button class="spotlight-comment-button">
      <img src="/DashIcons/pencil-line.svg" />
      <span class="spotlight-comment-button-text"> Comentar </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.spotlight-comment-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}

.spotlight-comment-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
}

.spotlight-comment {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  align-self: stretch;
}

.spotlight-comment-divider {
  width: 100%;
  height: 1px;
  background: $color-stroke-soft-200;
}

.spotlight-comment-author {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
}

.spotlight-comment-author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.spotlight-comment-name {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.spotlight-comment-text {
  color: $color-text-on-neutral-low-strong;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.spotlight-comment-button {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
  box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);

  &:hover {
    cursor: pointer;
  }
}

.spotlight-comment-like {
  align-self: stretch;
  padding: 10px;
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}

.spotlight-comment-button-text {
  color: $color-text-on-neutral-low-default;
  text-align: center;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}
</style>

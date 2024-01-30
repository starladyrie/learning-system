<script setup lang="ts">
import GenericTable from "../Common/GenericTable.vue";
import Card from "../Common/Card.vue";

const data = ref([
  {
    id: 1,
    name: "Time Management",
    date: "Ago 21 - Set 21",
    progress: 30,
    status: "Em andamento",
    professor: {
      name: "Nuray Aksoy",
      bio: "Gerente de produtos",
      picPath: "Images/Prof1.svg",
    },
  },
  {
    id: 2,
    name: "Leadership Skills",
    date: "Ago 02 - Ago 18",
    progress: 70,
    status: "Em andamento",
    professor: {
      name: "Arthur Taylor",
      bio: "CEO",
      picPath: "Images/Prof2.svg",
    },
  },
  {
    id: 3,
    name: "Diversity Training",
    date: "Jun 24 - Jul 03",
    progress: 100,
    status: "Concluído",
    professor: {
      name: "Lena Muller",
      bio: "Gerente de marketing",
      picPath: "Images/Prof3.svg",
    },
  },
  {
    id: 4,
    name: "Efficency at Work",
    date: "Jun 04 - Jul 28",
    progress: 100,
    status: "Concluído",
    professor: {
      name: "Wei Chen",
      bio: "Gerente de operações",
      picPath: "Images/Prof4.svg",
    },
  },
]);

const columns = ref([
  { key: "professor", label: "Professor" },
  { key: "course", label: "Nome do Curso" },
  { key: "progress", label: "Progresso" },
  { key: "status", label: "Status" },
  { key: "actions", label: "" },
]);
</script>

<template>
  <div class="courses-table">
    <Card
      icon="/DashIcons/book-3-line.svg"
      title="Cursos"
      buttonTitle="Ver todos"
      searchable
    >
      <GenericTable class="table-style">
        <template #header>
          <tr class="table-header-row">
            <th
              v-for="column in columns"
              :key="column.key"
              class="table-header-title"
            >
              {{ column.label }}
            </th>
          </tr>
        </template>

        <template #body>
          <tr v-for="item in data" :key="item.id" class="table-body-row">
            <td class="table-body-info-text">
              <img :src="item.professor.picPath" height="24px" />
              <div class="table-body-text">
                <span class="table-body-title"> {{ item.professor.name }}</span>
                <span class="table-body-subtitle">
                  {{ item.professor.bio }}</span
                >
              </div>
            </td>
            <td class="table-body-info-text">
              <div class="table-body-text">
                <span class="table-body-title"> {{ item.name }}</span>
                <span class="table-body-subtitle"> {{ item.date }}</span>
              </div>
            </td>
            <td class="table-body-info-text">
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: item.progress + '%' }"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span class="table-body-subtitle"> {{ item.progress }}% </span>
            </td>
            <td>
              <div class="table-body-badge">
                <img
                  v-if="item.status === 'Concluído'"
                  src="/DashIcons/check-fill.svg"
                  height="16px"
                />
                <img v-else src="/DashIcons/time-fill.svg" height="16px" />
                <span class="table-body-title"> {{ item.status }} </span>
              </div>
            </td>
            <td>
              <button class="table-body-button">
                <img src="/SidebarIcons/arrow-right-s-line.svg" height="16px" />
              </button>
            </td>
          </tr>
        </template>
      </GenericTable>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.courses-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}
.progress {
  height: 10px;
  width: 100px;
  background-color: $color-stroke-soft-200;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: $color-fill-accent-base;
  border-radius: 10px;
  color: $color-fill-neutral-low-0;
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-style {
  width: 100%;
}

.table-header-row {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 12px;
  gap: 10px;
  flex: 1 0 0;
  justify-content: space-between;
}

.table-header-title,
th {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.table-body-row,
tbody {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;
  background: $color-fill-neutral-low-0;
}

.table-body-info-text {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 auto;
}

.table-body-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
}

.table-body-title {
  overflow: hidden;
  color: $color-text-on-neutral-low-strong;
  text-overflow: ellipsis;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.table-body-subtitle {
  overflow: hidden;
  color: $color-text-on-neutral-low-default;
  text-overflow: ellipsis;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.table-body-badge {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid $color-stroke-soft-200;
}

.table-body-button {
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
</style>

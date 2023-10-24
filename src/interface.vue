<template>
    <div
        ref="element"
        class="drawer-notice"
    >
        <v-notice
            :icon="icon"
            :type="color"
        >
            <div v-md="text ?? t('interfaces.presentation-notice.no_text')" />
        </v-notice>
    </div>
</template>



<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const props = withDefaults(
        defineProps<{
            color?: string;
            icon?: string;
            text?: string;
            hidden: 'on_create' | 'on_update' | null;
            primaryKey: string | number;
        }>(),
        {
            color: 'normal',
            icon: 'info',
        }
    );

    const element = ref<HTMLElement | null>(null);

    onMounted(() => {
        const isCreating = props.primaryKey == '+';
        const hiddenOnCreate = props.hidden == 'on_create';
        const hiddenOnUpdate = props.hidden == 'on_update';
        const hidden = !element.value?.closest(".v-drawer")
            || (hiddenOnCreate && isCreating)
            || (hiddenOnUpdate && !isCreating);
        showField(hidden);
    });

    function showField(hidden: boolean = false): void {
        const fieldElement: HTMLElement | null | undefined = element.value?.closest(".field");
        if (!!fieldElement) fieldElement.hidden = hidden;
    }
</script>



<style scoped>
    :deep(a) {
        color: var(--theme--primary, var(--primary));
    }

    :deep(a:hover) {
        color: var(--theme--primary-accent, var(--primary-125));
    }
</style>

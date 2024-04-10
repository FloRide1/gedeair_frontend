<template>
    <main>
        <div
            class="position-absolute d-flex align-center justify-center w-100 h-100"
        >
            <v-btn
                :loading="loading"
                :disabled="loading"
                variant="tonal"
                size="x-large"
                href="/api/login"
            >
                Login
            </v-btn>
        </div>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        clientLogin() {
            this.loading = true;
        },
    },
};
</script>

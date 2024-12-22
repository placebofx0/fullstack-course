<script setup>
import moment from 'moment';

defineProps({
    portfolios: Array,
    canEdit: Boolean,
    isGettingPortfolios: Boolean,
    hasMorePortfolios: Boolean,
});

defineEmits(['more']);
</script>

<template>
    <section class="mb-10">
        <h2 class="text-xl font-bold mb-3 flex space-x-2">
            <span>Portfolios</span>
            <BaseLink
                v-if="canEdit"
                type="button"
                size="small"
                variant="secondary"
                to="/portfolios/new"
            >
                Add
            </BaseLink>
        </h2>
        <ul
            v-if="portfolios.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
            <li
                v-for="portfolio in portfolios"
                :key="portfolio.id"
                class="relative"
            >
                <BaseLink
                    v-if="canEdit"
                    :to="`/portfolios/${portfolio.id}?edit`"
                    size="small"
                    variant="secondary"
                    class="absolute right-2 top-3"
                >
                    Edit
                </BaseLink>
                <NuxtLink :to="`/portfolios/${portfolio.id}`">
                    <BaseCard
                        :key="portfolio.id"
                        :title="portfolio.title"
                        :excerpt="portfolio.excerpt + '...'"
                        :cover="portfolio.cover"
                        :badges="portfolio.skills"
                        :datetime="moment(portfolio.publishedAt).format('MMM YYYY')"
                    />
                </NuxtLink>
            </li>
        </ul>
        <span
            v-else
            class="text-grey"
        >
            None
        </span>
        <BaseButton
            v-if="isGettingPortfolios"
            size="small"
            variant="disabled"
            target="blank"
            type="button"
            class="block w-full mt-5"
            disabled="true"
        >
            Loading
        </BaseButton>
        <BaseButton
            v-else-if="hasMorePortfolios"
            @click="$emit('more')"
            size="small"
            variant="secondary"
            target="blank"
            type="button"
            class="block w-full mt-5"
        >
            Load More
        </BaseButton>
    </section>
</template>
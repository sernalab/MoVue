<template>
    <div class="menu">
        <Navbar />
        <Search />
    </div>
</template>

<script>
import Search from '@/components/Menu/Search'
import Navbar from '@/components/Menu/Navbar'

export default {
    name: 'Menu',
    components: {
        Search,
        Navbar
    }
}
</script>

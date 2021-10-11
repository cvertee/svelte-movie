<script>
	import { Router, Route, Link } from 'svelte-routing';
	import ShowInfo from './components/ShowInfo.svelte';
	import ShowSearch from './components/ShowSearch.svelte';

	export let url = '';
</script>

<Router>
	<nav>
		<Link to='/'>Home</Link>
		<Link to='/search'>Search</Link>
	</nav>
	<div>
		<Route path='search' component='{ShowSearch}'/>
		<Route path='show/:id' let:params>
			<ShowInfo id='{params.id}' />
		</Route>
	</div>
</Router>
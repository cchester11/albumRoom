<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getSpotifyAuth, getAudioFeatures_Album } from '$lib';

	const showModal = writable(false);
	const rooms = writable([]);

	// Manage modal visibility
	function toggleModal() {
		showModal.update((value) => !value);
	}

	// fetch rooms function
	async function getRooms() {
		try {
			// fetch rooms from backend
			const response = await fetch('http://localhost:8000/api/rooms');
			if (response.ok) {
				// parse
				const data = await response.json();
				// collect in global array variable
				rooms.set(data);
			} else {
				console.error('Failed to fetch categories')
			}
		} catch (err) {
			console.error('Error fetching categories: ', err);
		}
	};

	// onMount
	onMount(() => {
		getRooms();
	})
</script>

<!-- Main Container -->
<div class="h-full flex flex-col bg-lounge bg-cover bg-center">

	<!-- New Room Button -->
	<div class="m-7">
		<button
			class="bg-transparent hover:bg-slate-900 text-slate-900 font-semibold hover:text-slate-100 py-2 px-4 border border-slate-900 hover:border-transparent rounded"
			style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
			id="add_category"
			type="button"
			on:click={toggleModal}
		>
			Add Room
		</button>
	</div>

	<!-- Rooms List -->
	<div class="h-full w-full grid grid-cols-2 items-center gap-4 p-10 justify-between">
			{#each $rooms as room}
				<div 
					class="h-full w-full rounded flex items-center justify-center hover:bg-slate-900 bg-slate-900 bg-opacity-80 hover:bg-opacity-100"
				>
					<button 
						class="text-4xl text-slate-100" 
						style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
						type="button"
					>
						{room}
					</button>
				</div>
			{/each}
	</div>

	<!-- Category Modal -->
	{#if $showModal}
		<div
			tabindex="-1"
			aria-hidden="true"
			class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
		>
			<div class="bg-white p-6 rounded-lg shadow-lg w-1/3 h-1/3">
				<div class="mb-4">
					<label for="category" class="block text-gray-700 mb-2">Room</label>
					<input
						type="text"
						name="category"
						id="category"
						placeholder="Jazz"
						required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>
				<div class="flex justify-end">
					<button
						class="bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded mr-2"
						on:click={toggleModal}
					>
						Cancel
					</button>
					<button
						class="bg-lime-700 hover:bg-lime-900 text-white font-semibold py-2 px-4 rounded"
						on:click={toggleModal}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

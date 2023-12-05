# PasteHub backend

I have to also prepare for a presentation tomorrow, so I might be rushing this. The backend and frontend integration is not complete (honestly neither is complete), but this is what my backend is so far:

- [PocketBase](https://pocketbase.io/) - Instead of building out a backend infrastructure myself, I figured I would use PocketBase as the foundation of my backend. I also tried SupaBase, but I didn't want to have a Docker container running on my computer since that has more overhead.
- [pb_schema.json](./pb_schema.json) - Configuration for the PocketBase backend, which you can just import into a fresh PocketBase instance.

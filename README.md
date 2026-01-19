Why does a module become async when it is marked as shared in Module Federation, but stays sync when it is not shared?

Because shared modules are resolved at runtime from an external source, while non-shared modules are resolved at build time from the local bundle.

Why remoteEntry.js Exists
remoteEntry.js is a runtime manifest + loader that tells other applications what this MFE exposes and how to load it.

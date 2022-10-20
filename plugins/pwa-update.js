export default async (context) => {
  const workbox = await window.$workbox;

  if (!workbox) {
    console.debug("Workbox couldn't be loaded.");
    return;
  }

  workbox.addEventListener("installed", (event) => {
    if (!event.isUpdate) {
      console.debug("The PWA is on the latest version.");
      return;
    }

    if (confirm(`New content is available!. Click OK to refresh`)) {
      window.location.reload();
    }
    window.location.reload();
  });
};

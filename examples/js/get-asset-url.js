export async function getAssetFileURL(assetFile) {
  try {
    const response = await fetch("/spark/examples/assets.json");
    const assetsDirectory = "/spark/examples/assets/";
    const assetsInfo = await response.json();
    let url = assetsInfo[assetFile].url;
    if (window.sparkLocalAssets) {
      url = `${assetsDirectory}${assetsInfo[assetFile].directory}/${assetFile}`;
    }
    return url;
  } catch (error) {
    console.error("Failed to load asset file URL:", error);
    return null;
  }
}

const cloudinaryConfig = {
  cloudName: 'dr25ekobh',
  apiKey: '437982813144453',
  uploadPreset: 'ml_default'
};

const getCloudinaryUrl = (publicId) => {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}`;
};

const getCloudinaryUploadUrl = () => {
  return `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`;
};

export { cloudinaryConfig, getCloudinaryUrl, getCloudinaryUploadUrl };
import nextConnect from "next-connect";
import multer from "multer";
import FormData from "form-data";

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));

apiRoute.post((req, res) => {
  const file = req.file;
  const formData = new FormData();
  formData.append("image", file.buffer, file.originalname);

  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/upload/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

export { apiRoute as default, config };

export const config = {
  api: {
    bodyParser: false,
  },
};

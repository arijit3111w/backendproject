import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  // multer already has the file
      cb(null, "./public/temp")            // cb refers to a callback function 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ storage: storage })
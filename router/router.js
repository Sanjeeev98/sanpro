const express = require("express");
const { Get_data, Update_data, Delete_data, login } = require("../crud");

const router = express.Router();
router.get("/get",Get_data);
// module.exports = router;





// const express = require("express");
const { Create_data } = require("../crud");

// const router = express.Router();
router.post("/create",Create_data);
// module.exports = router;




// const express = require("express");


// const router = express.Router();
router.put("/update/:id",Update_data);
// module.exports = router;



router.delete("/delete/:id",Delete_data);


router.post("/login",login);
module.exports=router;

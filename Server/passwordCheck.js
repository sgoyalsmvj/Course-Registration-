function passCheck(entity){
    const passOk = entity.password == password;
    if (passOk) {
      jwt.sign(
        {
          username: entity.username,
          id: entity._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              secure: true,
              sameSite: "none",
            })
            .json(entity);
        }
      );
    }else{
        res.json("password not matched");
    }
}
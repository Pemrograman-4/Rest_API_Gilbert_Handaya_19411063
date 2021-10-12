const userModel = require('../Model/user_model')
const response = require('../Config/response')
const bcrypt = require('bcrypt')

//fungsi register

exports.register = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      email: data.email
    }).then((user) => {
      if (user) {
        reject(response.errorResponse('Email has been used'))
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          userModel.create(data)
            .then(() => {
              resolve(response.suksesResponse('Registered Succesfully'))
            }).catch(() => {
                reject(response.errorResponse('Registration Failed'))
              })
        })
      }
  	})
  })

//fungsi login

exports.login = (data) =>
	new Promise((resolve, reject) => {
		userModel.findOne({
			email: data.email
		}).then(user => {
			if (user) {
				if (bcrypt.compareSync(data.password, user.password)) {
					resolve(Object.assign(response.suksesResponse('Login Sucessfull'), {
						user: user
					}))
				} else {
					reject(response.errorResponse('Wrong Password'))
				}
			} else {
				reject(response.errorResponse('Wrong Email/Email is not Registered'))
			}
		})
	})
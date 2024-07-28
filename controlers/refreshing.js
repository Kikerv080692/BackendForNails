

const refreshing = (req, res) => {
    const {name, email, token} = req.user
    res.status(200).json({message: 'success',
        dataUser: {name, email, token}
    })
}

module.exports = refreshing
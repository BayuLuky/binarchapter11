import React, { useEffect } from "react"
import MainLogin from "../components/layout/auth"
import MainRegister from "../components/auth/register"
import MainGame from "../components/game/mainGame"
import MainListGame from "../components/list-game/mainListGame"
import MainDetailGame from "../components/detail-game/mainDetailGame"


import { useRouter } from "next/router"

const Menu = (props) => {

	const router = useRouter()
	const onPage = router.query.slug

	switch (onPage) {
		case 'login':
		return <MainLogin onPage={onPage}/>

		case 'register':
			return <MainRegister onPage={onPage}/>

		case 'game':
			return <MainGame onPage={onPage}/>

		case 'list-game':
			return <MainListGame onPage={onPage}/>

		case 'detail-game':
			return <MainDetailGame onPage={onPage}/>

		default:
			return <section>Loading....</section>	
	}
}

export default Menu
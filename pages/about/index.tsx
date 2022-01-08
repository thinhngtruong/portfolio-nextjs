import { AdminLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	return (
		<div>
			<h1>About Page</h1>
		</div>
	)
}

AboutPage.Layout = AdminLayout

export async function getStaticProps() {
	console.log('get static props')

	return {
		props: {},
	}
}

// export async function getServerSideProps() {
// 	return {
// 		props: {}, // will be passed to the page component as props
// 	}
// }
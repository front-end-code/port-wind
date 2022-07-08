import styles from './styles/styles.module.scss';

const About = () => {
    return(
        <main className={[styles.about, ' bg-white text-gray-900']}>
            <section className="container mx-auto columns-2 bg-slate-600">
                <section className='bg-blue-500'>
                <h1>About page layout</h1>
                </section>
                <section className='bg-blue-500'>
                   
                    <p>some text here...</p>
                </section>
            </section>
        </main>
    )
}

export default About;
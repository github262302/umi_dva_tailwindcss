import styles from './Car.scss'
const small =
    'https://tesla-cdn.thron.com/delivery/public/image/tesla/8abede90-db78-460f-8e3e-122265934afc/bvlatuR/std/1928x4096/M3-Homepage-Mobile-CN'
const big =
    'https://tesla-cdn.thron.com/delivery/public/image/tesla/c46c5993-c9c2-4938-a18d-7c414a9213ab/bvlatuR/std/4096x2560/M3-Homepage-Desktop-CN'
export default () => {
    return (
        <div className={styles.main}>
            <img className={styles.car} src={big} />
        </div>
    )
}

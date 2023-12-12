import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSeccao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae,
      placeat quam possimus fugiat alias labore itaque id quibusdam sint dicta
      pariatur doloribus beatae unde repudiandae, atque exercitationem officia
      nam!
    </Paragrafo>
    <GitHubSeccao>
      <img src="https://github-readme-stats.vercel.app/api?username=gonteejo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gonteejo&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSeccao>
  </section>
)

export default Sobre

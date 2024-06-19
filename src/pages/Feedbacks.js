import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import MyCarousel from '../helpers/MyCarousel'
import img1 from '../images/Feedbacks/001.jpg'
import img2 from '../images/Feedbacks/002.jpg'
import img3 from '../images/Feedbacks/003.jpg'
import img4 from '../images/Feedbacks/004.jpg'
import img5 from '../images/Feedbacks/005.jpg'
import img6 from '../images/Feedbacks/006.jpg'
import img7 from '../images/Feedbacks/007.jpg'
import img8 from '../images/Feedbacks/008.jpg'
import img9 from '../images/Feedbacks/009.jpg'
import img10 from '../images/Feedbacks/010.jpg'
import img11 from '../images/Feedbacks/011.jpg'
import img12 from '../images/Feedbacks/012.jpg'
import img13 from '../images/Feedbacks/013.jpg'
import img14 from '../images/Feedbacks/014.jpg'
import img15 from '../images/Feedbacks/015.jpg'
import img16 from '../images/Feedbacks/016.jpg'
import img17 from '../images/Feedbacks/017.jpg'
import img18 from '../images/Feedbacks/018.jpg'
import img19 from '../images/Feedbacks/019.jpg'
import img20 from '../images/Feedbacks/020.jpg'
import img21 from '../images/Feedbacks/021.jpg'

import '../styles/Slider.css'
import '../styles/Feedbacks.css'

const Feedbacks = () => {
  const fotos = [img1, img2, img3, img4, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]
  return (
    <div className='feedbacks'>
      <Container>
        <h1 className="title mb-5 d-flex justify-content-center">Отзывы</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Отзыв Натальи</Accordion.Header>
            <Accordion.Body>
              <h6> <b>Как я пришла к йоге!</b> <br />
                Всем привет ! Меня зовут Наталья. Мне 41 год. Хожу на йогу уже 3 года. Впервые я услышала о йоге от своего врача. Именно это чудесная женщина увидев мое искривление позвоночника порекомендовала мне занятия йогой. Я покивала, сказала «-Да, да!! Я обязательно пойду!» И благополучно забыла об это разговоре на долгих 2 года. Потом, когда у меня начала жутко болеть спина, когда я стою, когда хожу, а также боль начала отдавать в правую ногу, я вспомнила об этом разговоре. Искала по принципу ближе к дому. Впервые, когда пришла на групповые занятия с Тимуром меня удивило, что женщины старше меня могли делать вещи, которые мне недоступны. Тимур на первом занятии все подробно объяснял, каждое упражнение, специально для меня, ведь я была новичок. Понравилась атмосфера на занятиях, все было спокойно и каждый делал в меру своих возможностей. Тимур не давил на нас, не требовал делать то, что тело не готово делать. В начале каждого занятия Тимур все подробно рассказывает какие асаны и для чего мы их делаем, всегда отвечает на интересующие нас вопросы. Каждое занятие мы работаем с дыхание. Это очень важно. Ведь именно в этот момент мы настраиваемся на практику. Тимур все упражнения делает с нами, так легче понять , как нужно их делать правильно, а также можно в процессе занятий узнать как усилить или ослабить позу. На каждом занятии Тимур дает какие-то новые упражнения.
                <br />  <br /><b>Что нравится в йоге.</b> <br />
                Сейчас мне уже трудно представить свою жизнь без йоги. Тело просит само. Если пропускаю занятия, то тело начинает «костенеть», и опять начинаются боли в спине. Поэтому я стараюсь не пропускать. Нравится свое состоянии после занятий. Йога оставляет приятное послевкусие)). Выходишь из зала отдохнувшей! Тело приятно натружено, голова пустая , а ведь в современном мире это важно, иногда ни о чем не думать и дать мозгу отдохнуть))). Хорошая вещь -шавасана!. Занятия длятся час и именно в этот час, как говорит Тимур «Мы здесь и сейчас!» У нас очень разновозрастная группа, ну никакого соперничества нет. Каждый соперничает с самим с собой на коврике.  Нравится атмосфера в группе, полумрак и спокойная музыка. Нравится Тимур, который до начала занятий рассказывает интересные истории про возможности тела, и о том как жить в гармонии с самим с собой и со своим телом.
                <br />  <br /><b>Что достигнуто за 3 года.</b> <br />
                Физически я стала более выносливой. Тело стало более подтянуто. Стала гораздо реже болеть (хотя у меня маленький ребенок, который часто болеет зимой). Я лучше чувствую свое тело. Умею сама разгружать свой мозг.  Когда приезжает в гости мой племянник (13 лет), и я ему в шутку говорю – «А так ты можешь ?» и показываю, что-то легкое – он говорит мне «Да это легко!» и повторяет  и говорит, – «И чего ты туда ходишь ? Любой может это повторить»! Тогда я показываю ему позу, которую, только человек занимающийся сможет повторить. Мне приятно, что я могу делать вещи,  которые раньше мне были недоступны.
                Хочу сказать большое спасибо Тимуру! Ведь именно он построил занятия таким образом – что хочется туда ходить и ходить и ходить!
              </h6>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Отзыв Ирины</Accordion.Header>
            <Accordion.Body>
              <h6>Йога - удивительный вид физической активности, но и одновременно дает возможность духовного развития. Мне повезло найти своего тренера.  Знакомство с Тимуром и йогой изменило мою жизнь. Я стала значительно себя лучше чувствовать, ушли некоторые проблемы со здоровьем, появляется утраченная с годами гибкость. На занятия хожу с удовольствием. Тимур на занятиях создает теплую и уютную атмосферу, находит индивидуальный подход к каждому участнику группы.
                Спасибо!
              </h6>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Отзыв Натальи</Accordion.Header>
            <Accordion.Body>
              <h6>Хочу сказать несколько слов о том, что значит для меня йога с Тимуром. Я пришла в спортивный клуб прежде всего чтобы решить проблемы со здоровьем. Пробовала и упражнения на тренажёрах, и другие занятия, но, остановилась на йоге. Я выбрала йогу именно благодаря Тимуру. У него гармоничные, разнообразные и интересные занятия. Очень вдумчивый и аккуратный подход для людей с разной физической подготовкой. Практики направлены для восстановления здоровья позвоночника и суставов, обретения правильной осанки и здоровья в целом. Кроме того, "понятная" подача информации, грамотность, интеллигентность. А его постоянные напоминания о том что не стоит гнаться за успехами и сроками, помогают мне оберегать себя от травм. Спасибо!
                <br /> С уважением,
                Наталья Фролова.
              </h6>

            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="3">
            <Accordion.Header>Отзыв Елены</Accordion.Header>
            <Accordion.Body>
              <h6>
                Более 5 лет занимаюсь практикой йоги с Тимуром. В йогу я пришла от отчаяния, постоянных болей в позвоночнике и нарушения подвижности конечностей. Надо сказать, что я человек далекий от спорта, физической культуры и никогда не верила в свои физические возможности. Первое время было немного трудно. Но когда я ощутила первый успех и сделала то, о чем даже представить не могла, моя жизнь изменилась. Это чувство, что невозможное тебе доступно и ты на многое способен. Сегодня мои возможности в йоге  ещё более широкие: это заметная невооруженным взглядом гибкость, физическая стройность, духовное удовлетворение.  Надеюсь буду и дальше продолжать практику с Тимуром.
                <br />Елена, 49 лет.
              </h6>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Отзыв Марии</Accordion.Header>
            <Accordion.Body>
              <h6>
                Тимур, много лет уже с Вами занимаюсь и ваша манера преподавать йогу мне сразу понравилась и нравится до сих пор. Я практикую периодически йогу в других местах с разными преподавателями, но замечаю, что каждый раз ищу сходство с вашими занятиями, которые для меня наиболее комфортны и гармоничны🙏
              </h6>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Здесь будет чей-то отзыв</Accordion.Header>
            <Accordion.Body>
              <h6>
                Чей-то отзыв
              </h6>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <h4 className='d-flex justify-content-center m-4'>Отзывы на йогу онлайн</h4>

        {/* <Carousel slide fade data-bs-theme="dark">

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img1}
            alt="img1"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img2}
            alt="img2"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img3}
            alt="img3"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img4}
            alt="img4"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img5}
            alt="img5"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img6}
            alt="img6"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img7}
            alt="img7"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img8}
            alt="img8"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img9}
            alt="img9"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img10}
            alt="img10"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img11}
            alt="img11"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img12}
            alt="img12"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img13}
            alt="img13"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img14}
            alt="img14"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img15}
            alt="img15"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img16}
            alt="img16"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img17}
            alt="img17"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img18}
            alt="img18"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img19}
            alt="img19"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img20}
            alt="img20"
          />
        </Carousel.Item>

        <Carousel.Item className='d-flex justify-content-center'>
          <img
            className="slider-feedback"
            src={img21}
            alt="img21"
          />
        </Carousel.Item>

      </Carousel> */}
        <MyCarousel fotos={fotos} />

      </Container>
    </div>
  )
}

export default Feedbacks

import React from 'react'
import { Container, Accordion, Image } from 'react-bootstrap'
import '../styles/Gif.css'

const MyVideo = () => {
  return (
    <Container>
      <h1 className='tittle'>Мои видео</h1>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Хатха йога</Accordion.Header>
          <Accordion.Body>
            <br />
            <h6>Хатха йога. Комплекс на тазобедренные суставы. 60 минут </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TOXlYIQowqU?si=tf67NbUcNSPJX0W9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br /> <br />
            <h6>Хатха йога. Комплекс на спину. 85 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dRmodHTgjOo?si=BhL1YLHy3uATIkK6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Хатха йога. Йога простирания + статические асаны. 90 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zfxhVjHbQD0?si=wxoLZiessddtjTKT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Хатха йога. Скрутки лежа. 120 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GPMelzGNzGc?si=zIh5RLlW0Ni8-tQP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Хатха йога. Комплекс на тазобедренные суставы. 90 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/deSNLfkGE38?si=Uh-Hq7jDbsJEbplw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Комплекс динамической йоги. 49 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4Eo54YK6EqU?si=eX6ycga8He0emgok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Пранаяма и Кундалини йога</Accordion.Header>
          <Accordion.Body>
            <br />
            <h6>Крийя комплекс сиддхов. Онлайн занятие 60 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M9Pg_0RAl0I?si=DLwtY9rR1sfAu7XD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма йога для начинающих. Онлайн занятие 60 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9E8JXMcjhi4?si=dQnbEJDZqgP4hvpe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма йога для начинающих. Онлайн занятие 90 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WConhj0ofDk?si=39O1G3WUBVfVJKvp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма и медитация. Онлайн занятие 90 минут  </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dThNyYOblV4?si=PyCsue95qCAsoCzT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма "квадратное дыхание"Онлайн занятие 40 минут <br /> 5 сессий: 5-5-5-5, 6-6-6-6, 7-7-7-7, 8-8-8-8, 9-9-9-9  </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fl24SGORWfI?si=iQAqKFFMTZ9HDdHf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма Нади Шодхана (Попеременное дыхание) 7-7-7. 11 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CD4cjTBIiUE?si=AfRdtFM5fbf1dCO0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма Нади Шодхана (Попеременное дыхание) 7-14-7. 11 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/imEodmVw2O0?si=t3kuZEXYb_064tIF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма "квадратное дыхание 5-5-5-5". 7 минут </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s4ALm8_ywBk?si=QXsUZYCOx5H4Kvtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма "квадратное дыхание 6-6-6-6". 6 минут  </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZKuj-keLnk?si=A4ywB3nj56jxhHgt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма "квадратное дыхание 7-7-7-7". 7 минут  </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-cVgZeclXtI?si=jKtzzIyfpr2E5Enw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <br />   <br />
            <h6>Пранаяма "антистресс". 9 минут </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BfWCuiDraqk?si=6PSWOEI_SQNynwD_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Пранаяма "ясный ум". 9 минут </h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qGKT1p1BCuI?si=RvUIE3nKxTShWuR-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


          </Accordion.Body>

        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Нидра йога</Accordion.Header>
          <Accordion.Body>
            <br />
            <h6>Йога нидра. Практика релаксации (30 минут)</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y0AFpxCMUzQ?si=7JDhvlYADvjOYY2U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Йога нидра. Практика релаксации (50 минут)</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ix9KC98rAcM?si=p1aufGBEveH6Z7GV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Лекции и выступления</Accordion.Header>
          <Accordion.Body>
            <br />
            <h6>Мини лекция про йогу сиддхов</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EvsH70Ud6_E?si=b5RJgAVgZ0TSIDEA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Круглый стол Знакомство с ведущими йога марафона</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6MzFEKDIsMw?si=CPzorGvC1ngiVSRS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Мини лекция. Что такое йога? Какие практики являются йогой, а какие нет?<br /> В чем цель йоги?</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tg3BuRHnPZM?si=--5Ine5JzDCCBVxC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Йога интервью</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tYw1V6y6JKo?si=3di-QpITGOLRJy6L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Как создать программу учёта личной практики йоги на телефоне с <br />помощью приложения Memento</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qoK34rY0riU?si=6KYl-At7fXcsZbcG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Метафизика йоги или аксиоматика за 5 минут</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Blw97FebPh4?si=qK07rZfxBVTdPaf4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Лекция "Медитация в йоге"</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kIyaAF5aTrw?si=Vm-91-3R9YGYufMw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Лекция "Препятствия в йоге"</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sBHxRFG3xVw?si=P0R4WPiDP4E3EsHH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Лекция "Как выстроить личную практику йоги"</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vPjfIj_Mva8?si=Tmgts6wI4MjgmyRY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <br />   <br />
            <h6>Впечатления от первой поездки в Индию</h6>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7_xyAIo1E?si=CKXr-ZTlxjPDHz6-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
      <br />

      <Image src='https://media.giphy.com/media/Pz0CYaHBmIQvbMaRTh/giphy.gif' className='gifka' />

    </Container >
  )
}

export default MyVideo
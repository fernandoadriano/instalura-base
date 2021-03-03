import React, { useState } from 'react';

import Button from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/layout/Box';
import Grid from '../src/components/layout/Grid';
import Menu from '../src/components/commons/Menu';
import Modal from '../src/components/commons/Modal';
import Text from '../src/components/foundation/Text';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalState(false)}
      >
        {(propsModal) => (
          <FormCadastro
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsModal}
          />
        )}
      </Modal>

      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                marginTop={{
                  xs: '24px',
                  md: '40px',
                }}
                onClick={() => setModalState(true)}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="Imagem de celular"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}

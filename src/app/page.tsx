import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Users, Phone, Mail, Heart, Cross, Calendar } from "lucide-react"

export default function IgrejaLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cross className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Igreja Brasília</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#cultos" className="text-sm font-medium hover:text-primary transition-colors">
              Cultos
            </a>
            <a href="#localizacao" className="text-sm font-medium hover:text-primary transition-colors">
              Localização
            </a>
            <a href="#ministerios" className="text-sm font-medium hover:text-primary transition-colors">
              Ministérios
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Cross className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Bem-vindos à Nossa
              <span className="text-primary block">Comunidade de Fé</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Um lugar onde você pode crescer espiritualmente, encontrar comunidade e descobrir o propósito de Deus para
              sua vida no coração de Brasília.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Participe dos Cultos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultos Section */}
      <section id="cultos" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Cultos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se a nós em momentos de adoração, ensino e comunhão
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Culto Dominical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nosso principal culto semanal com adoração, pregação e comunhão.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Horários:</strong> 9h e 18h
                  </p>
                  <p>
                    <strong>Duração:</strong> 1h30min
                  </p>
                  <p>
                    <strong>Local:</strong> Templo Principal
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Culto de Oração
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Momento especial de oração e intercessão pela comunidade.</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Horário:</strong> Quartas 19h30
                  </p>
                  <p>
                    <strong>Duração:</strong> 1h
                  </p>
                  <p>
                    <strong>Local:</strong> Salão de Oração
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Culto Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Participe de onde estiver através da nossa transmissão ao vivo.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Horário:</strong> Domingos 18h
                  </p>
                  <p>
                    <strong>Plataforma:</strong> YouTube
                  </p>
                  <p>
                    <strong>Interação:</strong> Chat ao vivo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-lg text-muted-foreground">Venha nos visitar no coração de Brasília</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold">Igreja Brasília</p>
                    <p className="text-muted-foreground">
                      SQN 308, Bloco A, Loja 15
                      <br />
                      Asa Norte, Brasília - DF
                      <br />
                      CEP: 70747-010
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Estacionamento:</strong> Disponível
                    </p>
                    <p className="text-sm">
                      <strong>Acessibilidade:</strong> Rampa e elevador
                    </p>
                    <p className="text-sm">
                      <strong>Transporte:</strong> Próximo ao metrô
                    </p>
                  </div>
                  <Button className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Mapa Interativo</p>
                <p className="text-sm">Localização da Igreja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministérios Section */}
      <section id="ministerios" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Ministérios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre seu lugar na nossa comunidade e descubra como pode servir
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ministério Infantil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Cuidado especial e ensino bíblico para crianças de 0 a 12 anos.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Juventude</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Atividades, estudos e eventos especiais para jovens de 13 a 25 anos.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Cross className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Louvor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ministério de música e adoração que conduz nossa comunidade em louvor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ação Social</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Projetos de apoio à comunidade e trabalhos sociais na região.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">Estamos aqui para você. Envie sua mensagem ou dúvida</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Fale conosco através dos canais abaixo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">(61) 3333-4444</p>
                    <p className="text-sm text-muted-foreground">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">contato@igrejabrasilia.com.br</p>
                    <p className="text-sm text-muted-foreground">Respondemos em até 24h</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium mb-2">Redes Sociais</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      YouTube
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome</label>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input placeholder="(61) 99999-9999" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensagem</label>
                    <Textarea placeholder="Como podemos ajudá-lo?" rows={4} />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cross className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Igreja Brasília</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Uma comunidade de fé no coração de Brasília, dedicada a amar a Deus e servir ao próximo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Doações
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ministérios</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Infantil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Juventude
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Louvor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Ação Social
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SQN 308, Bloco A, Loja 15</li>
                <li>Asa Norte, Brasília - DF</li>
                <li>(61) 3333-4444</li>
                <li>contato@igrejabrasilia.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Igreja Brasília. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

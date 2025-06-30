import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServiceCatalog = () => {
  const services = [
    {
      id: 1,
      title: "Персональные экскурсии по Европе",
      location: "Париж, Рим, Барселона",
      price: "от 2,500 ₽/час",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg",
      category: "Экскурсии",
      features: ["Русскоязычный гид", "Индивидуальный маршрут", "Фотосессия"],
    },
    {
      id: 2,
      title: "Гастрономические туры по Азии",
      location: "Токио, Бангкок, Сингапур",
      price: "от 1,800 ₽/час",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg",
      category: "Гастрономия",
      features: ["Дегустация", "Местные рестораны", "Кулинарный мастер-класс"],
    },
    {
      id: 3,
      title: "Приключенческие туры",
      location: "Исландия, Норвегия, Новая Зеландия",
      price: "от 3,200 ₽/день",
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg",
      category: "Приключения",
      features: [
        "Горные походы",
        "Северное сияние",
        "Экстремальные виды спорта",
      ],
    },
    {
      id: 4,
      title: "Культурные программы",
      location: "Санкт-Петербург, Москва, Казань",
      price: "от 1,200 ₽/час",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg",
      category: "Культура",
      features: [
        "Музеи и театры",
        "Исторические места",
        "Архитектурные памятники",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Популярные услуги
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans']">
            Выберите идеальное путешествие из нашего каталога
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">
                  {service.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 font-['Montserrat']">
                    {service.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">
                      {service.price}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  <span className="text-sm">{service.location}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 mr-1"
                    />
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({service.reviews} отзывов)
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Посмотреть все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalog;

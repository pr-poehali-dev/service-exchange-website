import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GuideProfiles = () => {
  const guides = [
    {
      id: 1,
      name: "Мария Петрова",
      avatar: "/placeholder.svg",
      location: "Санкт-Петербург, Россия",
      rating: 4.9,
      reviews: 234,
      languages: ["Русский", "English", "Français"],
      specialties: ["История", "Архитектура", "Культура"],
      experience: "8 лет",
      price: "2,000 ₽/час",
      description:
        "Профессиональный гид с лицензией. Специализируюсь на исторических экскурсиях по центру Санкт-Петербурга.",
      verified: true,
      responseTime: "< 1 часа",
    },
    {
      id: 2,
      name: "Джон Смит",
      avatar: "/placeholder.svg",
      location: "Лондон, Великобритания",
      rating: 4.8,
      reviews: 189,
      languages: ["English", "Русский", "Deutsch"],
      specialties: ["Музеи", "Пабы", "Королевская семья"],
      experience: "12 лет",
      price: "3,500 ₽/час",
      description:
        "Родился и вырос в Лондоне. Покажу вам настоящий Лондон глазами местного жителя.",
      verified: true,
      responseTime: "< 2 часов",
    },
    {
      id: 3,
      name: "Анна Козлова",
      avatar: "/placeholder.svg",
      location: "Париж, Франция",
      rating: 4.9,
      reviews: 312,
      languages: ["Français", "Русский", "English"],
      specialties: ["Гастрономия", "Мода", "Искусство"],
      experience: "6 лет",
      price: "2,800 ₽/час",
      description:
        "Художник и гид в одном лице. Покажу Париж через призму искусства и вкуса.",
      verified: true,
      responseTime: "< 30 минут",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Топ гиды и эксперты
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans']">
            Наши лучшие гиды с проверенной репутацией
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {guide.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 font-['Montserrat']">
                      {guide.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {guide.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-400 mr-1"
                      />
                      <span className="font-medium text-sm">
                        {guide.rating}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        ({guide.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {guide.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      Языки:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((lang) => (
                        <Badge
                          key={lang}
                          variant="secondary"
                          className="text-xs"
                        >
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      Специализация:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div>
                    <Icon name="Clock" size={14} className="inline mr-1" />
                    Опыт: {guide.experience}
                  </div>
                  <div>
                    <Icon
                      name="MessageCircle"
                      size={14}
                      className="inline mr-1"
                    />
                    Ответ: {guide.responseTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-blue-600">
                    {guide.price}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Связаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Посмотреть всех гидов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuideProfiles;

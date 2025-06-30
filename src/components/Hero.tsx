import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 font-['Montserrat']">
          Найдите идеального гида для вашего путешествия
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-['Open_Sans']">
          Откройте мир с местными экспертами. Более 10,000 проверенных гидов в
          150+ странах
        </p>

        <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                Куда едем?
              </label>
              <Input placeholder="Город или страна" className="h-12" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                Тип услуги
              </label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guide">Персональный гид</SelectItem>
                  <SelectItem value="tour">Готовый тур</SelectItem>
                  <SelectItem value="transfer">Трансфер</SelectItem>
                  <SelectItem value="experience">Уникальный опыт</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">Дата</label>
              <Input type="date" className="h-12" />
            </div>

            <div className="flex items-end">
              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">10,000+</div>
            <div className="text-blue-100">Проверенных гидов</div>
          </div>
          <div>
            <div className="text-3xl font-bold">150+</div>
            <div className="text-blue-100">Стран мира</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50,000+</div>
            <div className="text-blue-100">Довольных туристов</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.9</div>
            <div className="text-blue-100">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

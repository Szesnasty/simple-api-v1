# Uruchomienie projektu

Do uruchomienia projektu wymagany jest Node.js.

1. Instalacja zależności

```
npm install
```

2. Uruchomienie migracji

```
npm run migrate
```

3. Uruchomienie seedów - aby wypełnić danymi bazę danych

```
npm run seed
```

## Struktura projektu

- api-calls

W folderze znajduje się plik `restaurant.http`. Za pomocą tego pliku możemy uderzać pod przygotowane w pliku endpointy i sprawdzać, co zostanie zwrócone.

**WAŻNE!** Aby móc korzystać z `api-calls` w przypadku VSC (Visual Studio Code), należy doinstalować wtyczkę REST Client.

- prisma

W folderze znajduje się wszystko co jest związane z bazy danych i prismą: migracje, baza sqlite, schema oraz plik odpowiedzalny za seedowanie danych.

- src

W tym katalogu mamo wszystko co tyczy się naszej aplikacji:

1. `controller`: Ten folder zawiera pliki kontrolerów. Tutaj definiujemy kontrollery które zawierają obsługę żądań takich jak np. tworzenie, aktualizowanie i usuwanie danych dla danego zasobu.
2. `dto`: W tym folderze definujemy scheme za pomocą obiektów DTO (Data Transfer Object). Tutaj właśnie definujemy kształt danych w jaki musimy komunikować się z danym endpointem. Dodatkowo walidujemy kształt danych.
3. `error`: W tym folderze definujemy error handler - czyli obsługę błędów na serwerze.
4. `middleware`: W tym folderze znajdują się middleware. Obecnie jest middleware służący do walidacji w oparciu o JSON Schema.
5. `router.js` - plik w którym definujemy trasy oraz controllery w aplikacji
6. `server.js` - główny plik, dzięki któremu nasz serwer działa.

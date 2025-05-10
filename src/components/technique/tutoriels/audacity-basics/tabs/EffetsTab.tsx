import React from "react";

const EffetsTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Effets audio dans Audacity</h3>
      <p className="mb-4">
        Audacity propose de nombreux effets pour modifier et améliorer vos fichiers audio. Voici les plus couramment utilisés :
      </p>
      
      <h4 className="text-lg font-medium">Normalisation</h4>
      <p className="mb-4">
        La normalisation ajuste le volume de l'audio pour qu'il atteigne un niveau standard, ce qui est utile pour équilibrer
        plusieurs pistes ou fichiers audio.
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Sélectionnez la partie audio à normaliser (ou tout le fichier)</li>
        <li>Allez dans <strong>Effet</strong> &gt; <strong>Normaliser</strong></li>
        <li>Réglez le niveau de normalisation (généralement -1.0 dB)</li>
        <li>Cliquez sur <strong>OK</strong></li>
      </ol>
      
      <h4 className="text-lg font-medium">Réduction du bruit</h4>
      <p className="mb-4">
        Cet effet permet de réduire les bruits de fond indésirables dans vos enregistrements :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Sélectionnez une portion de l'audio qui ne contient que du bruit (silence)</li>
        <li>Allez dans <strong>Effet</strong> &gt; <strong>Réduction du bruit</strong></li>
        <li>Cliquez sur <strong>Obtenir le profil de bruit</strong></li>
        <li>Sélectionnez ensuite toute la piste audio</li>
        <li>Retournez dans <strong>Effet</strong> &gt; <strong>Réduction du bruit</strong></li>
        <li>Ajustez les paramètres selon vos besoins</li>
        <li>Cliquez sur <strong>OK</strong></li>
      </ol>
      
      <h4 className="text-lg font-medium">Égaliseur</h4>
      <p className="mb-4">
        L'égaliseur permet d'ajuster les différentes fréquences de votre audio :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Sélectionnez la partie audio à égaliser</li>
        <li>Allez dans <strong>Effet</strong> &gt; <strong>Égaliseur</strong></li>
        <li>Ajustez les curseurs pour modifier les différentes fréquences</li>
        <li>Utilisez les préréglages disponibles ou créez les vôtres</li>
        <li>Cliquez sur <strong>OK</strong> pour appliquer</li>
      </ol>
      
      <h4 className="text-lg font-medium">Compression</h4>
      <p className="mb-4">
        La compression réduit la dynamique entre les sons forts et faibles, rendant l'audio plus uniforme :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Sélectionnez la partie audio à compresser</li>
        <li>Allez dans <strong>Effet</strong> &gt; <strong>Compresseur</strong></li>
        <li>Ajustez les paramètres selon vos besoins</li>
        <li>Cliquez sur <strong>OK</strong></li>
      </ol>
      
      <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800">
        <h4 className="text-lg font-medium text-purple-700 dark:text-purple-300 mb-2">Astuce</h4>
        <p className="text-purple-700 dark:text-purple-300">
          Utilisez la fonction <strong>Aperçu</strong> disponible dans la plupart des fenêtres d'effets pour entendre
          le résultat avant de l'appliquer définitivement. Cela vous permet d'ajuster les paramètres jusqu'à obtenir
          le son souhaité.
        </p>
      </div>
    </div>
  );
};

export default EffetsTab;